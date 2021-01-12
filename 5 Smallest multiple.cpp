#include <iostream>
#include <vector>

using namespace std;

#define ull unsigned long long

ull gcd(ull a,ull b){

    if(b == 0)      return a;

    return gcd(b, a % b);
}

ull lcm(ull a,ull b){

    return (a * b) / gcd(a,b) ;
}

ull solve(int n){

    ull result = 1;

    for(int i=2; i<=n; i++){

        result = lcm(result,i);
    }

    return result;
}


int main() {

    int t,n;

    cin >> t;

    while(t--){

        cin >> n;

        cout << solve(n) << endl;
    }
    return 0;
}
