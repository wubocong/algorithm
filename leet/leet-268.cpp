//
//  leet-63.cpp
//  leet
//
//  Created by Warrior Wu on 6/30/16.
//  Copyright © 2016 Warrior Wu. All rights reserved.
//

#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    int missingNumber(vector<int>& nums) {
        int sum=0;
        int size=nums.size();
        for (int n : nums){
            sum += n;
        }
        return size*(size+1)/2-sum;
    }
};
int main(){
    Solution wbc;
    vector<int> data {0, 1, 3};
    cout << wbc.missingNumber(data);
    return 0;
}