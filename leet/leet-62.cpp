//
//  main.cpp
//  leet
//
//  Created by Warrior Wu on 6/28/16.
//  Copyright © 2016 Warrior Wu. All rights reserved.
//

#include <iostream>;

using namespace std;

int main(){
    int m,n;
    for(int cycle=1;cycle<=10;cycle++){
        m=n=cycle;
        int path[100]={0};
        path[0]=1;
        for(int i=0;i<m;i++){
            for(int j=0;j<n;j++){
                if(j>0){
                    path[j]+=path[j-1];
                }
            }
        }
        cout << path[n-1] << endl;
    }
    return 0;
}