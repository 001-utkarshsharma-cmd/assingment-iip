
#include <iostream>
using namespace std;
int main() {
    int n,d=0,r,sum=0,i,p;
    cin>>n;
    int temp=n;
    while(temp){
        temp=temp/10;
        d++;
    }
    temp=n;
    while(temp){
        r=temp%10;
        i=1;
        p=1;
        while(i<=d){
            p=p*r;
            i++;
        }
        sum=sum+p;
        temp=temp/10;
    }
    cout<<sum;
    
}