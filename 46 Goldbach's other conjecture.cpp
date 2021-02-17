#include <iostream>
#include <vector>

using namespace std;

#define ll long long

#define M 500000


int solve(int n,vector <int> &prime){

    int curr = 1, ways = 0;

    while(true){

        int rem = n - (2*curr*curr);

        if(rem <= 0)        break;

        if(prime[rem] == 1)         ways += 1;

        curr += 1;
    }

    return ways;
}


void sieve(vector <int> &prime){

    prime[0] = 0, prime[1] = 0;

    for(int i=2; i*i<M; i++){

        if(prime[i] == 1){

            for(int j=i*i; j<M; j+=i)       prime[j] = 0;
        }
    }

    return ;
}


int main() {

    int t,n;

    vector <int> prime(M,1);

    sieve(prime);

    cin >> t;

    while(t--){

        cin >> n;

        cout << solve(n,prime) << endl;
    }

    return 0;
}