#include <iostream>
#include <vector>

using namespace std;

#define ll long long

ll solve(ll n){

    ll a = 2, b = 8, result = 0;

    bool sum_exceeded = false;

    if(a <= n)      result += a;

    if(b <= n)      result += b;

    while(!sum_exceeded){

        ll sum = a + 4*b;

        if(sum <= n)    result += sum;

        else            sum_exceeded = true;

        a = b;

        b = sum;
    }

    return result;
}


int main(){

    int t;
    cin >> t;

    ll n;
    
    while(t--){

        cin >> n;

        cout << solve(n) << endl;

    }
    
    return 0;
}