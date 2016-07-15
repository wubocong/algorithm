// ConsoleApplication2.cpp : 定义控制台应用程序的入口点。
//

#include "stdafx.h"
#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
	int maxSubArray(vector<int> &nums) {
		int left = 0, right = 0;
		int sum, max_sum;
		int max_number = nums[0];
		for (int i = 0; i < nums.size(); i++) {
			if (nums[i] > max_number) {
				max_number = nums[i];
			}
		}
		if (max_number <= 0) {
			return max_number;
		}
		sum = max_sum = 0;
		int cur_start = 0;
		for (int i = 0; i < nums.size(); i++) {
			sum += nums[i];
			if (sum <= 0) {
				cur_start = i + 1;
				sum = 0;
			}
			else {
				if (sum > max_sum) {
					right = i;
					max_sum = sum;
					left = cur_start;
				}
			}
		}
		sum = max_sum;
		cur_start = left;
		for (int i = left; i <= right; i++) {
			sum -= nums[i];
			if (sum > max_sum) {
				cur_start = i + 1;
				max_sum = sum;
			}
		}
		// vector<int>::iterator start_pointer = nums.begin();
		// vector<int> result(start_pointer + cur_start, start_pointer + right);
		// return result;
		return max_sum > max_number ? max_sum : max_number;
	}
};
int main() {
	vector<int> data{ -1,1,2,1 };
	Solution wbc;
	wbc.maxSubArray(data);
	return 0;
}