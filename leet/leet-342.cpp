class Solution {
public:
	bool isPowerOfFour(int num) {
		return num && (num&(num - 1)) == 0 && (num & 0xAAAAAAAA) == 0;
	}
};