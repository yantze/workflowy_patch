#!/usr/bin/env bash
set -eu

WFDIR=$(echo ~/Library/Application\ Support/Google/Chrome/Default/Extensions/koegeopamaoljbmhnfjbclbocehhgmkm/1.14_0)
# WFDIR=$(echo ~/Library/Application\ Support/Google/Chrome/Profile\ 4/Extensions/koegeopamaoljbmhnfjbclbocehhgmkm/1.14_0)
echo "Your workflowy path may:"
echo "$WFDIR"

if [[ ! -d $WFDIR ]]; then
  echo " Can not find Workflowy extension path."
  exit 1
fi

if [[ -s "$WFDIR/custom/custom.css" ]]; then
  echo "=== Notice: ==="
  echo "You had append before. overwrite custom resource."
else
  sed -i -e '/\<\/body/r append.txt' "$WFDIR/document_view.html"
fi

cp -rf custom "$WFDIR"
