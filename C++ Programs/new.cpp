#include <iostream>
using namespace std;
int main()
{
    int ebill,amount;
    cout << "Enter the electricity bill units: ";
    cin >> ebill;
    if (ebill <= 100)
    {
        amount = ebill * 5;
    }
    else if (ebill >= 100 && ebill < 200)
    
        amount = ebill * 7; // Apply 10% discount
        
    else if (ebill >= 200 && ebill < 300)
    {
        amount = ebill * 10; // Apply 20% discount
    }
    else
    {
        amount = ebill * 12; // Apply 30% discount
    }
    cout << "The electricity bill amount is: " << amount << endl;
    return 0;
}