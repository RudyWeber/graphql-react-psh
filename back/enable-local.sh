platform tunnel:list --all > /dev/null 2>&1
if [[ $? == 0 ]]; then
  echo "You already have platform ssh tunnels open"
  return
fi

ENV=`git branch --show-current`

platform tunnel:open -e $ENV -A api -y
export PLATFORM_RELATIONSHIPS="$(platform tunnel:info -e $ENV -A api --encode)"
export PORT=4000

set -o allexport
[[ -f .env.local ]] && source .env.local
set +o allexport
