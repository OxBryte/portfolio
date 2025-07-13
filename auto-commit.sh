#!/bin/bash

# Auto-commit script for portfolio project

# Get current timestamp
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')

# Check if there are any changes to commit
if [[ -n $(git status --porcelain) ]]; then
    echo "🔄 Changes detected, committing..."
    
    # Add all changes
    git add .
    
    # Commit with timestamp
    git commit -m "Auto-commit: $TIMESTAMP - Portfolio updates"
    
    # Push to remote (if remote exists)
    if git remote -v | grep -q origin; then
        echo "🚀 Pushing to remote repository..."
        git push origin main
    else
        echo "⚠️  No remote repository configured. Changes committed locally."
    fi
    
    echo "✅ Auto-commit completed successfully!"
else
    echo "📝 No changes to commit. Working tree is clean."
fi 