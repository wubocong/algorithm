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
    int minSubArrayLen(int s, vector<int>& nums) {
        int l=0,r=0;
        int n=nums.size();
        int ans=n+1,sum=0;
        while(l<n&&r<n){
            while(sum<s&&r<n){
                sum+=nums[r++];
            }
            while(sum>=s&&l<n){
                if(r-l<ans){
                    ans=r-l;
                }
                sum-=nums[l++];
            }
        }
        if(ans==n+1){
            ans=0;
        }
        return ans;
    }
};
int main(){
    Solution wbc;
    vector<int> data{10,5,13,4,8,4,5,11,14,9,16,10,20,8};
    wbc.minSubArrayLen(80,data);
    return 0;
}