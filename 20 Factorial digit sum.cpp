#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

#define ll long long


ll solve(int n){

    vector <int> result;

    result.push_back(1);

    for(int i=1; i<=n; i++){

        ll carry = 0;

        for(int j=0; j<result.size(); j++){

            ll sum = (result[j] * i) + carry;

            result[j] = (sum % 10);

            carry = (sum / 10);
        }

        while(carry){

            result.push_back(carry % 10);

            carry /= 10;
        }
    }

    reverse(result.begin(),result.end());

    ll digit_sum = 0;

    for(int x : result)         digit_sum += x;

    return digit_sum;
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