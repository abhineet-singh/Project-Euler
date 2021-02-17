#include <iostream>
#include <vector>
using namespace std;


int solve(int n, vector <vector <int>> grid){

    int second_last_row = n-1, first_row = 1;

    for(int row = second_last_row; row >= first_row; row--){

        for(int col = 0; col < row ; col++){

            grid[row][col] += max( grid[row + 1][col], grid[row + 1][col + 1] );
        }
    }

    return grid[first_row][0];
}


int main() {

    int t,n,x;

    cin >> t;

    while(t--){

        cin >> n;

        vector <vector <int>> grid(n+1,vector <int>());

        for(int i=1; i<=n; i++){

            for(int j=1; j<=i; j++){

                cin >> x;

                grid[i].push_back(x);
            }
        }

        cout << solve(n,grid) << endl;
    }
      
    return 0;
}
