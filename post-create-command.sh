"postCreateCommand": "./.devcontainer/post-create-command.sh",

post-create-command.sh

apt-get update && \
apt-get install -y git openssh-client
