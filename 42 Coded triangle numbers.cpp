#include <iostream>
#include <vector>
#include <cmath>

using namespace std;

#define ll long long


ll solve(ll a){

    ll discriminant = (1 + 8*a);

    ll k = sqrt(discriminant);

    ll result = -1;

    if(k*k == discriminant){

        if( (k-1) % 2 == 0)        result = (k-1)/2;
    }

    return result;
}


int main() {

    ll t,a;

    cin >> t;

    while(t--){

        cin >> a;

        cout << solve(a) << endl;
    }

    return 0;
}