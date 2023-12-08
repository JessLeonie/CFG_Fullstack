# SECTION 2.1
def check_if_isogram(word):
    letters = [letter.lower() for letter in word]
    for i in letters:
        if letters.count(i) > 1:
            return False
    return True


# SECTION 3

max_class_size = 30

def allocate_students_to_class(number_of_students):
    class_dict = {}

    # if the number_of_students is less than max_class_size allocate students evenly between two classes
    if number_of_students <= max_class_size:
        halved_students = number_of_students // 2
        class_dict['Class 1'] = halved_students + (number_of_students % 2)
        class_dict['Class 2'] = halved_students

    # if the number_of_students is greater than max_class_size determine the minimum number of classes needed
    else:
        classes_needed = (number_of_students + max_class_size - 1) // max_class_size
        students_per_class = number_of_students // classes_needed
        remaining_students = number_of_students % classes_needed

    # allocate the students evenly between the number of classes
        for i in range(1, classes_needed + 1):
            class_dict[f'Class {i}'] = students_per_class

        for i in range(1, remaining_students + 1):
            class_dict[f'Class {i}'] += 1

    print(f'Proposed Allocation: {len(class_dict)} classes')
    print(class_dict)

