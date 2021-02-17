#include <iostream>
#include <vector>

using namespace std;

#define ll long long

#define M 1000000007


ll solve(int n,int m){

    vector <vector<ll>> grid(n+1,vector<ll>(m+1,0));

    for(int row=0; row<=n; row++){

        for(int col=0; col<=m; col++){

            if(row == 0 || col == 0)        grid[row][col] = 1;

            else        grid[row][col] = (grid[row][col-1] % M + grid[row-1][col] % M) % M;
        }
    }

    return grid[n][m];
}


int main() {

    int t,n,m;

    cin >> t;

    while(t--){

        cin >> n >> m;

        cout << solve(n,m) << endl;
    }

    return 0;
}