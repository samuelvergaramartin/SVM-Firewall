#include <stdio.h>
#include <stdlib.h>

int main() {
    const char *checkIfIsActivated = "ufw status | grep 'Status: active' | sed 's/.* //'";
    const char *checkIfIsDisactivated = "ufw status | grep 'Status: inactive' | sed 's/.* //'";

    system(checkIfIsActivated);
    system(checkIfIsDisactivated); 
}