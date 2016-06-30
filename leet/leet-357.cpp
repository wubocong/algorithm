//
//  leet-63.cpp
//  leet
//
//  Created by Warrior Wu on 6/30/16.
//  Copyright © 2016 Warrior Wu. All rights reserved.
//

#include <iostream>;

using namespace std;

class Solution {
public:
    int countNumbersWithUniqueDigits(int n) {
        int count[11]={1,10, 91, 739, 5275, 32491, 168571, 712891, 2345851, 5611771, 8877691};
        if(n>10){
            return count[10];
        }
        else{
            return count[n];
        }
        return 0;
    }
};
int main(){
    Solution wbc;
    int result[11]={0};
    result[0]=1;
    for(int n=1;n<=10;n++){
        int factorial=9;
        for(int i=11-n;i<10;i++){
            factorial*=i;
        }
        result[n]+=factorial+result[n-1];
        cout << result[n] << ' ';
    }
    return 0;
}