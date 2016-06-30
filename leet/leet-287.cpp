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
private:
    int criminal;
public:
    int findDuplicate(vector<int>& nums) {
        quicksort(nums, 0, nums.size()-1);
        if(this->criminal){
            return this->criminal;
        }
        else{
            for(int i=0;i<nums.size()-1;i++){
                if(nums[i]==nums[i+1]){
                    return nums[i];
                }
            }
        }
        return 0;
    }
    void quicksort(vector<int>& nums,int ledge,int redge){
        int head=ledge,tail=redge;
        bool side=true;
        while(head<tail){
            if(side){
                if(nums[head]==nums[tail]){
                    this->criminal=nums[head];
                }
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
                if(nums[head]==nums[tail]){
                    this->criminal=nums[head];
                }
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
    vector<int> data {26,2,9,20,31,7,14,32,37,15,29,6,12,38,48,22,19,45,42,40,1,12,25,36,39,30,35,4,27,12,49,16,47,3,44,41,8,17,21,23,10,43,12,34,24,28,33,13,46,11};
    cout << wbc.findDuplicate(data);
    for(vector<int>::iterator it=data.begin();it!=data.end();it++){
        cout << *it << ' ';
    }
    return 0;
}