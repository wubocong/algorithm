class Solution {
public:
	bool containsDuplicate(vector<int>& nums) {
		bool count[1000000] = { false };
		for (int i = 0; i < nums.size(); i++) {
			if (count[nums[i]]) {
				return true;
			}
			else {
				count[nums[i]] = true;
			}
		}
		return false;
	}
};