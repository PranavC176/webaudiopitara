import React, { useState } from 'react';
import styles from '@/styles/category.module.css';
import { Button } from 'react-bootstrap';

const CategorySelection = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const selectCategory = (category) => {
    const isSelected = selectedCategories.includes(category);
    if (isSelected) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const isButtonDisabled = selectedCategories.length < 3;

  return (
    <div className={styles.categorymain}>
      <div className={styles.categoryHead}>
        <h1>Select your favourite categories</h1>
        <p>Select at least 3 favourite categories</p>
      </div>
      <div className={styles.categorieslist}>
        <div className={styles.categorylist1}>
          <div
            className={`${styles.category} ${
              selectedCategories.includes('Education') ? styles.selected : ''
            }`}
            onClick={() => selectCategory('Education')}
          >
            Education
          </div>
          <div
            className={`${styles.category} ${
              selectedCategories.includes('Politics') ? styles.selected : ''
            }`}
            onClick={() => selectCategory('Politics')}
          >
            Politics
          </div>
          <div
            className={`${styles.category} ${
              selectedCategories.includes('History') ? styles.selected : ''
            }`}
            onClick={() => selectCategory('History')}
          >
            History
          </div>
          <div
            className={`${styles.category} ${
              selectedCategories.includes('Sports') ? styles.selected : ''
            }`}
            onClick={() => selectCategory('Sports')}
          >
            Sports
          </div>
          <div
            className={`${styles.category} ${
              selectedCategories.includes('True Crime') ? styles.selected : ''
            }`}
            onClick={() => selectCategory('True Crime')}
          >
            True Crime
          </div>
        </div>

        <div className={styles.categorylist1}>
          <div
            className={`${styles.category} ${
              selectedCategories.includes('Arts & Culture') ? styles.selected : ''
            }`}
            onClick={() => selectCategory('Arts & Culture')}
          >
            Arts & Culture
          </div>
          <div
            className={`${styles.category} ${
              selectedCategories.includes('Health & Wellness') ? styles.selected : ''
            }`}
            onClick={() => selectCategory('Health & Wellness')}
          >
            Health & Wellness
          </div>
          <div
            className={`${styles.category} ${
              selectedCategories.includes('Comedy') ? styles.selected : ''
            }`}
            onClick={() => selectCategory('Comedy')}
          >
            Comedy
          </div>
          <div
            className={`${styles.category} ${
              selectedCategories.includes('Personal Development') ? styles.selected : ''
            }`}
            onClick={() => selectCategory('Personal Development')}
          >
            Personal Development
          </div>
        </div>

        <div className={styles.categorylist1}>
          <div
            className={`${styles.category} ${
              selectedCategories.includes('Science & Technology') ? styles.selected : ''
            }`}
            onClick={() => selectCategory('Science & Technology')}
          >
            Science & Technology
          </div>
          <div
            className={`${styles.category} ${
              selectedCategories.includes('Fiction & Storytelling') ? styles.selected : ''
            }`}
            onClick={() => selectCategory('Fiction & Storytelling')}
          >
            Fiction & Storytelling
          </div>
          <div
            className={`${styles.category} ${
              selectedCategories.includes('Society & Culture') ? styles.selected : ''
            }`}
            onClick={() => selectCategory('Society & Culture')}
          >
            Society & Culture
          </div>
          <div
            className={`${styles.category} ${
              selectedCategories.includes('Self Improvement') ? styles.selected : ''
            }`}
            onClick={() => selectCategory('Self Improvement')}
          >
            Self Improvement
          </div>
        </div>

        <div className={styles.categorylist1}>
          <div
            className={`${styles.category} ${
              selectedCategories.includes('News & Current Affairs') ? styles.selected : ''
            }`}
            onClick={() => selectCategory('News & Current Affairs')}
          >
            News & Current Affairs
          </div>
          <div
            className={`${styles.category} ${
              selectedCategories.includes('Business & Entrepreneurship') ? styles.selected : ''
            }`}
            onClick={() => selectCategory('Business & Entrepreneurship')}
          >
            Business & Entrepreneurship
          </div>
          <div
            className={`${styles.category} ${
              selectedCategories.includes('Lifestyle and Relationships') ? styles.selected : ''
            }`}
            onClick={() => selectCategory('Lifestyle and Relationships')}
          >
            Lifestyle and Relationships
          </div>
        </div>
      </div>
      <div className={styles.submitbutton}>
        <Button type="submit" className={styles.continue} disabled={isButtonDisabled}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default CategorySelection;
