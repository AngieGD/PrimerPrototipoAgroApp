import 'package:agroappv2/Ux/Category.dart';
import 'package:flutter/material.dart';

class CardVista extends StatelessWidget {
  final Category category;
  const CardVista({Key? key, required this.category}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 200,
      margin: EdgeInsets.only(
        right: 32,
      ),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(10),
        color: Colors.white,
      ),
      child: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            SizedBox(
              height: 24,
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 8.0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Container(
                    height: 40,
                    width: 40,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(100),
                      border: Border.all(
                        color: Colors.black12,
                      ),
                    ),
                    child: Icon(category.icon),
                  ),
                  Container(
                    height: 40,
                    width: 40,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(100),
                      border: Border.all(
                        color: Colors.black12,
                      ),
                    ),
                    child: Icon(Icons.more_vert),
                  ),
                ],
              ),
            ),
            Spacer(),
            Text(
              '${category.tipo} ${category.totalTask} ',
            ),
            Text(
              category.title,
              style: TextStyle(fontSize: 40),
            ),
            SizedBox(
              height: 32,
            ),
            SizedBox(
              height: 16,
            )
          ],
        ),
      ),
    );
  }
}
