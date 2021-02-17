#include <iostream>
#include <vector>
#include <cmath>

using namespace std;

#define ll long long


ll solve(int n){

    ll result = 0, num = 2;

    vector <ll> v;

    for(int i=0; i<=9; i++)     v.push_back(pow(i,n));

    while(true){

        ll temp = num, k = 0, sum = 0;

        while(temp){

            int rem = (temp % 10);

            sum += v[rem];

            k += 1;

            temp /= 10;
        }

        if(sum == num)      result += num;

        if(num > k*v[9])        break;

        num += 1;
    }

    return result;
}


int main() {

    int n;

    cin >> n;

    cout << solve(n) << endl;

    return 0;
}
