#include <iostream>
#include <vector>

#define ll long long

using namespace std;


ll solve(int n, int k, string s){

    ll prod = 1, result = 0;

    int zeroes_count = 0, l = 0;

    for(int i=0; i<n; i++){

        if( (s[i] - '0') == 0 )     zeroes_count += 1;

        else    prod *= (s[i] -'0');

        if(i >= k){

            if( (s[l] - '0') == 0 )     zeroes_count -= 1;

            else    prod /= (s[l] -'0');

            l += 1;
        }

        if(i-l+1 == k){

            if(zeroes_count == 0)       result = max(result,prod);
        }       
    }

    return result;
}


int main(){
    
    int t,n,k;

    string s;

    cin >> t;

    while(t--){

        cin >> n >> k;

        cin >> s;

        cout << solve(n,k,s) << endl;
    }

    return 0;
}