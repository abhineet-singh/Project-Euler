#include <iostream>
#include <vector>

using namespace std;

#define ll long long


int main() {

    ll t,n;

    cin >> t;

    while(t--){

        cin >> n;

        ll result = ( n * (n-1) * (n+1) * (3*n + 2))/12;

        cout << result << endl;
    }
    
    return 0;
}