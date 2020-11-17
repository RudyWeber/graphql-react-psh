platform tunnel:list --all > /dev/null 2>&1
if [[ $? == 0 ]]; then
  echo "You already have platform ssh tunnels open"
  return
fi

ENV=`git branch --show-current`

platform tunnel:open -e $ENV -A front
export REACT_APP_PLATFORM_RELATIONSHIPS="$(platform tunnel:info -e $ENV -A front --encode)"
export REACT_APP_PLATFORM_ROUTES="$(platform ssh -e $ENV -A front 'echo $PLATFORM_ROUTES' 2&>/dev/null)"
