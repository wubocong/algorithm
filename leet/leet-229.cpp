class Solution {
public:
  vector<int> majorityElement(vector<int> &nums) {
    int major1 = nums[0], major2 = nums[1], count1 = 1, count2 = 1;
    int length = nums.size();
    for (int i = 2; i < length; i += 3) {
      bool exist1 = false, exist2 = false;
      if (count1 == nums[i]) {
        count1++;
        exist1 = true;
      }
      if (count2 == nums[i]) {
        count2++;
        exist2 = true;
      }
      if (i <= length - 2) {
        if (count1 == nums[i + 1]) {
          count1++;
          exist1 = true;
        }
        if (count2 == nums[i + 1]) {
          count2++;
          exist2 = true;
        }
      }
			if (i <= length - 3) {
        if (count1 == nums[i + 1]) {
          count1++;
          exist1 = true;
        }
        if (count2 == nums[i + 1]) {
          count2++;
          exist2 = true;
        }
      }
    }
    return major;
  }
};