class Solution {
public:
    int firstUniqChar(string s) {
        vector<int> unique(26,0);
        int l=s.length();
        int pos=-1;
        for(int i=0;i<l;i++){
            unique[s[i]-97]++;
        }
        for(int i=0;i<l;i++){
            if(unique[s[i]-97]==1){
                pos=i;
                break;
            }
        }
        return pos;
    }
};