#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

void solve(int n, vector <string> &grid){

    int C = grid[0].size();

    vector <int> answer;

    int carry = 0;

    for(int col = C-1; col >= 0; col--){

        int sum = carry;

        for(int row = 0; row < n; row++){

            sum += (grid[row][col] - '0');
        }

        answer.push_back(sum % 10);

        carry = sum / 10;
    }

    while(carry){

        answer.push_back(carry % 10);

        carry /= 10;
    }

    reverse(answer.begin(),answer.end());

    for(int i=0; i<10; i++)     cout << answer[i];
}


int main() {
    
    int n;

    cin >> n;

    vector <string> grid(n);

    for(int i=0; i<n; i++)      cin >> grid[i];

    solve(n,grid);

    return 0;
}