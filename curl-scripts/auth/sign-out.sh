# VARIABLE=VALUE sh curl-scripts/auth/change-password.sh

curl "https://tic-tac-toe-wdi.herokuapp.com/sign-out" \
--include \
--request DELETE \
--header "Authorization: Token token=${TOKEN}"

echo
