#include <iostream>
#include <vector>

using namespace std;

void solve(){

    vector <int> factorial = {1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880};

    int upper_bound = 7 * factorial[9];
    
    /*
        After this point, the sum of the factorials of the digits of a number 
        
        (even if they were all 9s) will never exceed the value of the number itself.
    */
    
    int curr_num = 1;
    
    while(curr_num <= upper_bound){
        
        int sum_of_factorial_of_digits = 0, temp = curr_num;
        
        while(temp){

            sum_of_factorial_of_digits += factorial[temp % 10];
            
            temp /= 10;
        }
        
        if(sum_of_factorial_of_digits == curr_num){
            
            cout << curr_num << endl;
        }
        
        curr_num += 1;
    }
    
    return ;
}


int main(){
    
    // A factorion is an integer which is equal to the sum of factorials of its digits

    solve();

    return 0;
}