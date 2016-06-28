//
//  leet-63.cpp
//  leet
//
//  Created by Warrior Wu on 6/28/16.
//  Copyright © 2016 Warrior Wu. All rights reserved.
//

#include <iostream>
#include <vector>

using namespace std;

vector<vector<int>> obstacleGrid(3,vector<int>(3,0));
int main(){
    obstacleGrid.at(1).at(1)=1;
    int m=obstacleGrid.size(),n=obstacleGrid.at(0).size();
    vector<int> path(n,0);
    path.at(0)=1;
    for(int i=0;i<m;i++){
        for(int j=0;j<n;j++){
                if(obstacleGrid.at(i).at(j)==1){
                    path.at(j)=0;
                }else if(j>0){
                    path.at(j)+=path.at(j-1);
                    
                }
            
        }
    }
    cout << path.at(n-1);
    return 0;
}
