#include <iostream>
#include <set>

using namespace std;


bool is_palindrome(int original_x){

    int reverse_x = 0, temp = original_x;
  
    while(temp){

        reverse_x = (reverse_x * 10) + (temp % 10);

        temp /= 10;
    }

    return (reverse_x == original_x);
}


void solve(set <int, greater<int> > &s){

    for(int i=100; i<1000; i++){

        for(int j=i; j<1000; j++){

            int prod = i*j;

            if(is_palindrome(prod))      s.insert(prod);
        }
    }

    return ;
}


int main() {

    int t,n;

    cin >> t;

    set <int, greater<int> > s;

    solve(s);

    while(t--){

        cin >> n;

        auto itr = s.upper_bound(n);

        if(itr != s.end())      cout << *itr << endl;
    }
    
    return 0;
}
