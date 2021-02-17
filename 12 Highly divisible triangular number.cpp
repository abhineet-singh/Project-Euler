#include <iostream>
#include <vector>

using namespace std;

#define ll long long

#define M 100000


ll solve(int n, vector <int> &count){

    ll sum = 0, curr_num = 1;

    bool found = false;

    while(!found){

        ll x,y;

        if(curr_num % 2 == 0){

            x = curr_num / 2, y = curr_num + 1;
        }
        else{
            x = curr_num , y = (curr_num + 1)/2;
        }

        int factors = (count[x] * count[y]);

        if(factors > n){

            found = true;

            sum = x*y;
        }

        curr_num += 1;
    }

    return sum;
}


void build(vector <int> &count){

    for(int i=1; i<=M; i++){

        for(int j=i; j<=M; j+=i)         count[j] += 1;
    }

    return ;
}


int main() {

    int t,n;

    vector <int> count(M+1,0);

    build(count);

    cin >> t;

    while(t--){

        cin >> n;

        cout << solve(n,count) << endl;
    }

    return 0;
}