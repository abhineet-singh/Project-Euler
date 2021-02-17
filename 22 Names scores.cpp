#include <iostream>
#include <vector>
#include <map>
#include <algorithm>

using namespace std;

#define ll long long


void solve(map <string,int> &mp, vector <string> &names,int n){

    sort(names.begin(),names.end());

    int count = 1;

    for(string y : names){

        int sum = 0;

        for(char x : y)     sum += (x - 'A' + 1);

        mp[y] = (sum * count);

        count += 1;
    }

    return ;
}


int main() {

    int n,q;

    cin >> n;

    vector <string> names(n);

    for(int i=0; i<n; i++)      cin >> names[i];

    map <string,int> mp;

    solve(mp,names,n);

    cin >> q;

    string s;

    while(q--){

        cin >> s;

        cout << mp[s] << endl;
    }

    return 0;
} 