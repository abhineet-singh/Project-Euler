#include <iostream>
#include <vector>

using namespace std;


void sieve(int n, vector <int> &primes){

    vector <int> v(n+1,1);

    for(int i=2; i*i<=n; i++){

        if(v[i] == 1){

            for(int p=i*i; p<=n; p+=i)     v[p] = 0;
        }
    }

    for(int i=2; i<=n; i++){

        if(v[i] == 1)       primes.push_back(i);
    }

    return ;
}


int main() {

    int t,n;

    cin >> t;

    vector <int> primes;

    sieve(1e6 , primes);

    while(t--){

        cin >> n;

        long long sum = 0, i = 0;

        while(primes[i] <= n && i < primes.size()){  
            
            sum += primes[i];

            i += 1;
        }

        cout << sum << endl;
    }
    
    return 0;
}