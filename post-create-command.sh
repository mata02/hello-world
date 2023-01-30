https://code.visualstudio.com/docs/remote/troubleshooting#_ssh-tips
https://code.visualstudio.com/docs/remote/troubleshooting#_setting-up-the-ssh-agent

"postCreateCommand": "./.devcontainer/post-create-command.sh",


apt-get update && \
apt-get install -y git openssh-client
