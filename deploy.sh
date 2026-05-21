#!/bin/bash

# 1. Download the raw config straight from Google Drive
echo "🔄 Fetching absolute latest keys from Google Drive..."
curl -L -o .env "https://drive.google.com/file/d/1W4i4Wi_xpyD2IqFpO_R3iu08GIhOgFiC/view?usp=sharing"

# 2. Read the values inside the downloaded file into variables
source .env

# 3. Create a compiled version replacing placeholders with live keys
echo "🏗️ Injecting credentials into compiled production assets..."
cp register.js register.compiled.js

# Use sed to safely replace tokens (using | instead of / to avoid URL breaking)
sed -i "s|%%RPC_URL%%|${RPC_URL}|g" register.compiled.js
sed -i "s|%%CONTRACT_ADDRESS%%|${CONTRACT_ADDRESS}|g" register.compiled.js

echo "✅ Compiled asset generated: register.compiled.js"

# 4. Optional: Push changes to GitHub
# echo "🚀 Pushing update payload to server..."
# git add register.compiled.js
# git commit -m "Deployment compiled with latest drive ledger configurations"
# git push origin main

