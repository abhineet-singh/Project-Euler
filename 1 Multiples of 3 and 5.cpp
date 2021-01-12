#include <iostream>
#include <vector>

using namespace std;

#define ll long long


ll solve(ll n){

    ll a = n - (n % 3), b = n - (n % 5), c = n - (n % 15);

    ll p = a/3, q = b/5, r = c/15;

    ll x = (p * (a + 3))/2,  y = (q * (b + 5))/2, z = (r * (c + 15))/2;

    return (x + y - z);
}


int main() {

    ll t,n;

    cin >> t;

    while(t--){

        cin >> n;

        cout << solve(n-1) << endl;
    }

    return 0;
}