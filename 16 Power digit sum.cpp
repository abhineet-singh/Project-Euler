#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

#define ll long long


ll power(ll a,ll b){

    vector <int> v;
    
    v.push_back(1);
    
    for(int i=1; i<=b; i++){
        
        int carry = 0;
        
        for(int j=0; j<v.size(); j++){
            
            int sum = (v[j] * a) + carry;
            
            v[j] = sum % 10;
            
            carry = sum / 10;
        }
        
        while(carry){
            
            v.push_back(carry % 10);
            
            carry /= 10;
        }
    }
    
    reverse(v.begin(),v.end());
    
    ll total_sum = 0;
    
    for(int x : v)      total_sum += x;

    return total_sum;
}


int main() {

    int t,n;

    cin >> t;

    while(t--){

        cin >> n;

        cout << power(2,n) << endl;
    }

    return 0;
}
