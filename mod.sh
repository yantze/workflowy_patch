#!/usr/bin/env bash
# set -eu

WFDIR=$(echo ~/Library/Application\ Support/Google/Chrome/Default/Extensions/koegeopamaoljbmhnfjbclbocehhgmkm/1.14_0)
echo "Your workflowy path:"
echo $WFDIR

cp -rf custom "$WFDIR"

if [[ -s "$WFDIR/custom/custom.css" ]]; then
  echo "You had append before."
else
  sed -i -e '/\<\/body/r append.txt' $WFDIR/document_view.html
fi
