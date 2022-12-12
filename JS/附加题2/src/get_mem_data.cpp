#include <sstream>
#include <string>
#include "get_mem_data.h"

std::string helloUser(std::string name)
{
    double a = stod(name);
    long long *l = (long long *)&a;
    return std::to_string(*l);
}
