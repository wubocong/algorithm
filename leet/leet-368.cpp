#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
	vector<int> largestDivisibleSubset(vector<int>& nums) {
		int n = nums.size();
		vector<int> result;
        if(n==0) {
            return result;
        }
		quicksort(nums, 0, n-1);
		vector<int> max(n, 1);
		int start = 0;
		vector<int> parent(n, -1);
		for (int i = 1; i < n; i++) {
			for (int j = i - 1; j >= 0; j--) {
				if (nums[j] % nums[i] == 0 && max[j] >= max[i]) {
					max[i] = max[j] + 1;
					parent[i] = j;
					if (max[i] > max[start]) {
						start = i;
					}
				}
			}
		}
		while (start != -1) {
			result.push_back(nums[start]);
			start = parent[start];
		}
		return result;
	}

	void quicksort(vector<int>& nums, int ledge, int redge) {
		int head = ledge, tail = redge;
		bool side = true;
		while (head < tail) {
			if (side) {
				if (nums[head] < nums[tail]) {
					swap(nums[head], nums[tail]);
					head++;
					side = !side;
				}
				else {
					tail--;
				}
			}
			else {
				if (nums[head] < nums[tail]) {
					swap(nums[head], nums[tail]);
					tail--;
					side = !side;
				}
				else {
					head++;
				}
			}
		}
		if (head > ledge) {
			quicksort(nums, ledge, head);
		}
		if (head < redge) {
			quicksort(nums, head + 1, redge);
		}
	}
};