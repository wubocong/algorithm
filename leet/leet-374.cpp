// Forward declaration of guess API.
// @param num, your guess
// @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
int guess(int num);

class Solution {
public:
	int guessNumber(int n) {
		int left = 1, right = n;
		while (true) {
			int middle = (left + right) / 2;
			int result = guess(middle);
			if (result == 0) {
				return middle;
				break;
			}
			else
				if (result == 1) {
					left = middle + 1;
				}
				else {
					right = middle - 1;
				}
		}
	}
};