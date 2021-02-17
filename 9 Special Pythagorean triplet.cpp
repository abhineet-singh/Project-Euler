#include <iostream>
#include <vector>

using namespace std;

#define ll long long


ll solve(int n){

    ll max_prod = -1;

    if(n % 2 == 0){

        for(int a=1; a<=n/3; a++){

            int b = (n*n - 2*a*n)/(2*n - 2*a);

            int c = (n - a - b);

            ll prod = (a*b)*c;

            if(a*a + b*b - c*c == 0)        max_prod = max(max_prod,prod);
        }
    }

    return max_prod;
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
