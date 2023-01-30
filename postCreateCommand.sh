"postCreateCommand": "./.devcontainer/postCreateCommand.sh",

postCreateCommand.sh

apt-get update && \
apt-get install -y git openssh-client
