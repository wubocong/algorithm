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
    int hIndex(vector<int>& citations) {
        int n=citations.size();
        quicksort(citations, 0, n-1);
        int ans=n;
        for(int it=n-1;it>=0;it--){
            if(citations[it]<n-it){
                ans=n-it-1;
                break;
            }
        }
        return ans;
    }
    void quicksort(vector<int>& nums,int ledge,int redge){
        int head=ledge,tail=redge;
        bool side=true;
        while(head<tail){
            if(side){
                if(nums.at(head)>nums.at(tail)){
                    swap(nums[head], nums[tail]);
                    head++;
                    side=!side;
                }
                else{
                    tail--;
                }
            }
            else {
                if(nums.at(head)>nums.at(tail)){
                    swap(nums[head], nums[tail]);
                    tail--;
                    side=!side;
                }
                else{
                    head++;
                }
            }
        }
        if(head>ledge){
            quicksort(nums, ledge, head);
        }
        if(head<redge){
            quicksort(nums, head+1, redge);
        }
    }
};
int main(){
    Solution wbc;
    vector<int> data{3, 0, 6, 1, 5};
    cout << wbc.hIndex(data);
    return 0;
}