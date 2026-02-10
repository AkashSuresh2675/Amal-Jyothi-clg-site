# Deployment Guide

## Prerequisites

- Node.js v18 or higher
- MongoDB instance (local or cloud)
- Server with at least 1GB RAM
- Domain name (optional)

---

## Deployment Options

### Option 1: Deploy to Render

1. **Create Account**
   - Go to [render.com](https://render.com)
   - Sign up with GitHub

2. **Create New Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select the repository and branch

3. **Configure Service**
   ```
   Name: ajce-website-api
   Environment: Node
   Build Command: cd server && npm install
   Start Command: cd server && npm start
   ```

4. **Add Environment Variables**
   ```
   NODE_ENV=production
   PORT=5000
   MONGODB_URI=your_mongodb_atlas_uri
   JWT_SECRET=your_super_secret_key_here
   JWT_EXPIRE=7d
   CLIENT_URL=https://your-frontend-url.com
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   EMAIL_FROM=noreply@ajce.in
   EMAIL_FROM_NAME=AJCE Website
   CONTACT_EMAIL=info@ajce.in
   ```

5. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment to complete
   - Access your API at: `https://your-service.onrender.com/api`

---

### Option 2: Deploy to Railway

1. **Create Account**
   - Go to [railway.app](https://railway.app)
   - Sign in with GitHub

2. **New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository

3. **Configure**
   - Railway will auto-detect Node.js
   - Set root directory to `server`
   - Add environment variables (same as Render)

4. **Deploy**
   - Click deploy
   - Get your deployment URL
   - API will be at: `https://your-project.railway.app/api`

---

### Option 3: Deploy to Heroku

1. **Install Heroku CLI**
   ```bash
   # macOS
   brew tap heroku/brew && brew install heroku
   
   # Windows
   # Download from heroku.com
   ```

2. **Login to Heroku**
   ```bash
   heroku login
   ```

3. **Create Heroku App**
   ```bash
   cd server
   heroku create ajce-website-api
   ```

4. **Set Environment Variables**
   ```bash
   heroku config:set NODE_ENV=production
   heroku config:set MONGODB_URI=your_mongodb_uri
   heroku config:set JWT_SECRET=your_secret
   heroku config:set CLIENT_URL=https://your-frontend.com
   # ... add all other env variables
   ```

5. **Deploy**
   ```bash
   git push heroku main
   ```

6. **Open App**
   ```bash
   heroku open
   ```

---

### Option 4: Deploy to DigitalOcean (VPS)

1. **Create Droplet**
   - Choose Ubuntu 22.04 LTS
   - Select plan (Basic $6/month minimum)
   - Add SSH keys

2. **SSH into Server**
   ```bash
   ssh root@your_server_ip
   ```

3. **Setup Server**
   ```bash
   # Update system
   apt update && apt upgrade -y
   
   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
   apt install -y nodejs
   
   # Install MongoDB (optional if using cloud)
   wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | apt-key add -
   echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-6.0.list
   apt update
   apt install -y mongodb-org
   systemctl start mongod
   systemctl enable mongod
   
   # Install PM2
   npm install -g pm2
   
   # Install Nginx
   apt install -y nginx
   ```

4. **Clone Repository**
   ```bash
   cd /var/www
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo/server
   npm install
   ```

5. **Setup Environment**
   ```bash
   nano .env
   # Paste your environment variables
   ```

6. **Start with PM2**
   ```bash
   pm2 start server.js --name ajce-api
   pm2 save
   pm2 startup
   ```

7. **Configure Nginx**
   ```bash
   nano /etc/nginx/sites-available/ajce-api
   ```
   
   Add:
   ```nginx
   server {
       listen 80;
       server_name api.ajce.in;
       
       location / {
           proxy_pass http://localhost:5000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```
   
   Enable:
   ```bash
   ln -s /etc/nginx/sites-available/ajce-api /etc/nginx/sites-enabled/
   nginx -t
   systemctl restart nginx
   ```

8. **Setup SSL with Certbot**
   ```bash
   apt install -y certbot python3-certbot-nginx
   certbot --nginx -d api.ajce.in
   ```

---

## MongoDB Setup

### Option 1: MongoDB Atlas (Recommended)

1. **Create Account**
   - Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
   - Sign up for free

2. **Create Cluster**
   - Choose free tier (M0)
   - Select region closest to your server
   - Create cluster

3. **Setup Database Access**
   - Database Access → Add New Database User
   - Create username and password
   - Set privileges to "Read and write to any database"

4. **Setup Network Access**
   - Network Access → Add IP Address
   - Add "0.0.0.0/0" for development (allow from anywhere)
   - For production, add your server's IP

5. **Get Connection String**
   - Clusters → Connect → Connect your application
   - Copy connection string
   - Replace `<password>` with your database user password
   - Use this as MONGODB_URI

### Option 2: Self-Hosted MongoDB

If using VPS with MongoDB installed:
```
MONGODB_URI=mongodb://localhost:27017/ajce-website
```

For security, create admin user:
```bash
mongosh
use admin
db.createUser({
  user: "admin",
  pwd: "strong_password",
  roles: ["root"]
})
```

Then use:
```
MONGODB_URI=mongodb://admin:strong_password@localhost:27017/ajce-website?authSource=admin
```

---

## Post-Deployment

### 1. Seed Database
```bash
# SSH into server or use deployment console
npm run seed:import
```

### 2. Test Endpoints
```bash
# Health check
curl https://your-api-url.com/api/health

# Test login
curl -X POST https://your-api-url.com/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@ajce.in","password":"admin123"}'
```

### 3. Update Frontend
Update your frontend's API base URL to point to deployed backend.

### 4. Change Default Passwords
```bash
# Login and change admin password immediately
curl -X PUT https://your-api-url.com/api/auth/update-password \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "currentPassword": "admin123",
    "newPassword": "NewSecurePassword123!"
  }'
```

---

## Environment Variables Checklist

Essential:
- ✅ `NODE_ENV=production`
- ✅ `PORT=5000`
- ✅ `MONGODB_URI`
- ✅ `JWT_SECRET` (use strong random string)
- ✅ `CLIENT_URL`

Optional but Recommended:
- ⬜ `EMAIL_HOST`
- ⬜ `EMAIL_PORT`
- ⬜ `EMAIL_USER`
- ⬜ `EMAIL_PASSWORD`
- ⬜ `CLOUDINARY_*` (if using Cloudinary)

---

## Security Checklist

- ✅ Change default admin password
- ✅ Use strong JWT_SECRET (min 32 characters)
- ✅ Enable CORS only for your frontend domain
- ✅ Use HTTPS/SSL certificate
- ✅ Keep dependencies updated
- ✅ Enable MongoDB authentication
- ✅ Whitelist server IP in MongoDB Atlas
- ✅ Setup firewall rules
- ✅ Use environment variables (never commit secrets)
- ✅ Enable rate limiting
- ✅ Setup monitoring and logging

---

## Monitoring

### PM2 Monitoring (VPS)
```bash
# View logs
pm2 logs ajce-api

# Monitor CPU/Memory
pm2 monit

# Restart app
pm2 restart ajce-api

# View status
pm2 status
```

### Platform Monitoring
- **Render**: Built-in metrics dashboard
- **Railway**: Metrics tab
- **Heroku**: Heroku metrics or add-ons like New Relic

---

## Backup Strategy

### Database Backups

**MongoDB Atlas:**
- Automatic backups enabled on paid tiers
- Manual snapshots available

**Self-Hosted:**
```bash
# Create backup
mongodump --uri="mongodb://localhost:27017/ajce-website" --out=/backup/$(date +%Y%m%d)

# Restore backup
mongorestore --uri="mongodb://localhost:27017/ajce-website" /backup/20240101

# Automate with cron
crontab -e
# Add: 0 2 * * * /path/to/backup-script.sh
```

### File Uploads Backup
```bash
# Sync uploads to cloud storage
rsync -avz /var/www/ajce-website/server/uploads/ user@backup-server:/backups/uploads/
```

---

## Scaling

### Horizontal Scaling
- Use load balancer (Nginx, HAProxy)
- Deploy multiple instances
- Use shared session storage (Redis)

### Database Scaling
- MongoDB replica sets
- Sharding for large datasets
- Read replicas

### CDN for Static Assets
- Cloudinary for images
- AWS S3 + CloudFront
- Vercel for static files

---

## Troubleshooting

### App Won't Start
1. Check logs: `pm2 logs` or platform logs
2. Verify environment variables
3. Test MongoDB connection
4. Check port availability

### 502 Bad Gateway
1. Check if app is running: `pm2 status`
2. Verify Nginx configuration
3. Check firewall rules
4. Restart services

### Database Connection Failed
1. Verify MONGODB_URI
2. Check network access settings
3. Verify credentials
4. Test connection locally

### High Memory Usage
1. Check for memory leaks
2. Optimize database queries
3. Implement caching
4. Increase server resources

---

## Continuous Deployment

### GitHub Actions

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v2
      
      - name: Deploy to Render
        env:
          RENDER_API_KEY: ${{ secrets.RENDER_API_KEY }}
        run: |
          curl -X POST https://api.render.com/deploy/...
```

---

## Cost Estimates

### Free Tier Options
- **Render**: Free (with limitations)
- **Railway**: $5 credit/month
- **Heroku**: Limited free tier
- **MongoDB Atlas**: Free M0 cluster (512MB)

### Production Setup
- **VPS (DigitalOcean)**: $6-12/month
- **MongoDB Atlas M10**: $57/month
- **Domain**: $10-15/year
- **SSL**: Free (Let's Encrypt)
- **Total**: ~$20-80/month

---

## Support

For issues during deployment:
1. Check platform documentation
2. Review error logs
3. Contact platform support
4. Consult community forums
