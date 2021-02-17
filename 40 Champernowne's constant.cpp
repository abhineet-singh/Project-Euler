
#include <iostream>
#include <vector>
#include <string>
using namespace std;

#define ll long long
#define s(n)  scanf("%lld",&n)


ll solve(ll n){

    ll start_number = 1, numbers_exist = 9, number_of_digits = 1;

    while(n > numbers_exist*number_of_digits){

        n -= (numbers_exist*number_of_digits);

        start_number *= 10;

        numbers_exist *= 10;

        number_of_digits += 1;
    }
    
    ll k = (n-1)/number_of_digits;
    
    ll rem = (n-1) % number_of_digits;
    
    ll exact_number = start_number + k;
    
    string num_string = to_string(exact_number);
    
    return (num_string[rem] - '0');
}


int main() {

    ll t, n;

    s(t);

    while(t--){

        ll ans = 1;

        for(int i=1; i<=7; i++){

            s(n);

            ans *= solve(n);
        }

        cout << ans << endl;
    }

    return 0;
}
