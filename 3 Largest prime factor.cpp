#include <iostream>

using namespace std;

#define ll long long 

ll solve(ll n){

    ll result = 1;

    while(n % 2 == 0){

        result = 2;

        n /= 2;
    }

    for(ll i = 3; i*i<=n; i+=2){

        while(n % i == 0){

            result = i;

            n /= i;
        }
    }

    if(n > 1)       result = n;

    return result;
}

int main() {

    ll t,n;

    cin >> t;

    while(t--){

        cin >> n;

        cout << solve(n) << endl;
    }

    return 0;
}